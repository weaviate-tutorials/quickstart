> Note: We are archiving this repository. The code for the Quickstart tutorial is available in-line on the [site](https://weaviate.io/developers/weaviate/quickstart).

## Weaviate Quickstart Tutorial

This repository contains files related to the [Weaviate Quickstart Tutorial](https://weaviate.io/developers/weaviate/quickstart).

The `data` directory contains the relevant data file.

You will need to install the appropriate [Weaviate client library](https://weaviate.io/developers/weaviate/client-libraries) in order to run these.

### Python users

The `quickstart_end_to_end.ipynb` will take you through the tutorial end-to-end. You can run view and run it with a local Jupyter instance, or on a cloud environment such as Google Colab.

### JavaScript users

There are three files:

- quickstart_0_delete_class.js
    - Deletes the `Question` class if one exists
- quickstart_1_import.js
    - Imports the data
- quickstart_2_query.js
    - Performs a `nearText` query

You can run them with NodeJS, for example by typing: `node quickstart_0_delete_class.js`.