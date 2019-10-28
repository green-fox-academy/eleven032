# Import user data to MySQL

Use the [bookstore database](../../sql-basics/assets/data.sql) from the previously completed SQL basics workshop. 

## Examine the data

 - Look at the [user data file](../assets/users.csv) carefully. It is provided in CSV format. 
 - Try to come up with matching MySQL field types.

## Parse the CSV

 - Read it to the memory and prepare for insertion

## Design your table

 - It should be a single table

## Test your code

 - Write a test function that confirms that the CSV file has the same records as the imported table

## Gotchas
 
 - Your import can (and probably will) fail a few times. Come up with a strategy to easily empty the records in your table
