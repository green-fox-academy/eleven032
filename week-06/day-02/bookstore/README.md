# Bookstore endpoints

Import the bookstore database from [here](../../sql-basics/assets/data.sql). 

## List book titles

 - Create an API endpoint that lists all book titles
 - Return an HTML file containing this list

## All books with full data

 - List the following data:
	- title of book
	- name of author
	- category
	- name of publisher
	- price
- Return an HTML file with a `<table>` that contains these information

## Create filters

 - Add filtering options to the previous endpoint
 - If a filter exists, only list records in case the cell matches the filter's value
 - Implement these filters as query string parameters:
	 - Category as `category`
	 - Publisher as `publisher`
	 - Price lower than as `plt`
	 - Price greater than as `pgt`
 - Multiple filters can be present at the same time

For example `/books?category=Science` should only return books in the Science category.
