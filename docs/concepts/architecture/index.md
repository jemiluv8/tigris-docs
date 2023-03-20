# Architecture

Tigris is built using cloud-native principles and provides a serverless
experience where it is able to seamlessly scale with your applications.

It separates Query, Indexing and the Storage layers and allows these layers to
be scaled independently based on the workload needs. By designing Tigris using a
cloud native architecture, it provides users with incredible flexibility to run
various types of workloads as well as the ability to achieve massive scale.

![Tigris Architecture](/img/tigris-architecture.jpeg)

At the heart of Tigris is FoundationDB. FoundationDB is a distributed key-value
store that enables nearly limitless scalability.

## FoundationDB as the data persistence layer

FoundationDB is used by Apple, Snowflake, and countless others as a stand-alone,
production-ready distributed key-value store with interactive transactions. It
provides the same consistency guarantees as Spanner (strict serializability),
and has an amazing correctness story through
[simulation testing](https://apple.github.io/foundationdb/testing.html).
FoundationDB exposes a key-value API, similar to RocksDB, but it scales to
support petabytes of data and millions of operations per second in a single
deployment on a modest amount of commodity hardware.

![FoundationDB Architecture](https://apple.github.io/foundationdb/_images/architecture-1.jpeg)

(reference:
[https://apple.github.io/foundationdb/architecture.html](https://apple.github.io/foundationdb/architecture.html))

Tigris uses FoundationDB’s transactional key-value interface as its underlying
storage engine.

Tigris leverages FoundationDB to handle durability, replication, sharding,
transaction isolation, and load balancing. FoundationDB provides Tigris with
extremely powerful workload management features. The database is constantly
evaluating the load of the cluster to determine when it is “too busy”, and when
that happens it will artificially slow down starting new transactions until the
load is stable again. By forcing all the latency to the beginning of your
transaction, FoundationDB ensures every operation after that experiences a
consistent, low latency. Many other database systems lack any workload
management features at all, which manifests as overloaded clusters requiring
operators to shut down all the clients to get it back under control.

Read more about why we chose FoundationDB
[here](https://blog.tigrisdata.com/building-a-database-using-foundationdb).

## Query processing

Applications using Tigris make use of its universal APIs to handle all the
complex data interactions. Tigris natively provides HTTP APIs and uses JSON for
transmitting data.

There are two ways to interact with Tigris:

- using the native client drivers directly in your application
- using the MongoDB official drivers with Tigris' MongoDB compatibility

![Query Engine](/img/query-engine.jpeg)

The user queries interact with the Tigris query engine that performs the
necessary validations (permissions, schema, quotas), generates a query plan and
then executes the query.

## Search indexing

Under the hood, Tigris has implemented a fork of the popular open source search
tool Typesense and uses it to intelligently index the documents. This means that
you don't need a separate platform to access robust search capabilities, it
works out of the box. Furthermore, since FoundationDB is used as the data
persistence layer, search indexes can be scaled to support large datasets.

## Tigris in a nutshell

Tigris provides a cohesive, flexible set of tools for application developers to
take an idea from production without stepping into the sinkhole of data
pipelines, broken sync jobs, and complicated concurrency bugs present in many
modern application architectures. As your data grows, so does Tigris, with a
cloud-native architecture designed for scaling.
