I created a simple UI that takes in a user input and searches for matches
using the Open Library API and displays the results to the user.

A user can use a dropdown to search by keyword, title, or author.
The user presses the Enter key to execute the search.

For paging through the results, a user can select how many rows per page to view.
Then, he/she can select the next page or previous page arrows to go through the results.
The user can also select to view the first page or last page of results.

My application is able to handle a large number of results.
This is because I use the page parameter when fetching from the Open Library API.
Therefore, even if there are a lot of results, I am only fetching 100 max at a time.
Then, for the pagination, I have logic to slice the approprate data to display to the user.
