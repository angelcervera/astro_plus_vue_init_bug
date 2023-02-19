# Double Vue initialization

The trace at [src/_app](src/_app.ts) is printed one time per component.
To be able to use [Pinia](https://pinia.vuejs.org/), it should be initialized one per load.

