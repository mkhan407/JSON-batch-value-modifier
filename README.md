# JSON-batch-value-modifier
Allows batch modification of the fields within a JSON file, such as for a game's save data

Video demonstration:

[<img src="https://img.youtube.com/vi/mkwaro2NQfc/hqdefault.jpg" width="640" height="360"
/>](https://www.youtube.com/embed/mkwaro2NQfc)

This Node.JS script allows one to modify the fields within a JSON file in a batch format. For example, you can take the values of a game's save data, locate all values listed as "health", and modify all of them to the same value.

It recursively searches (looks for all elements of a specified key, regardless of how deep they are in the JSON file) to find which values to modify. It then exports these values to a specified export JSON file. This allows this common process to be done in an automated manner, rather than by changing each value manually one by one. This is especially useful for larger and larger files.
