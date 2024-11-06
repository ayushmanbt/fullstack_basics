In the previous two days we learnt about mongoDB a noSQL database. 

We used the [mongodb compass](https://www.mongodb.com/products/tools/compass) to visually interact with the database

Before using mongodb compass you might want to setup local mongodb following their manual - https://www.mongodb.com/docs/manual/installation/

Or you can use mongoDB atlas to keep your database in the internet, with their free tier.

We then used raw query in the compass GUI and then used node.js to query the database.

We operated all the crud operations in the database using the GUI and the JavaScript client:

1. find : to find multiple documents
2. findOne: to find one document
3. insertOne: to insert a new document
4. insertMany: can be used to insert many document
5. updateOne: updates one element 
6. findOneAndUpdate: updates one element and returns the old element
7. findOneAndReplace: replaces the old element with the new element created (the id is transferred to the new element)
8. findOneAndDelete: return the element deleted after deleting the element
9. deleteOne: deletes one element
10. ddeleteMany: deletes all the elements matching the query

### How to write query 

For query we use a Javascript object kind of notation where we mention the property and if we have to do a greater than or less than comparison we use the `{$gt: value}` expression after the variable. 

We can also sort the results obtained from the query using the sort property and using the project property we can manipulate which fields are shown. 