def binary_search(list, item):
    low = 0
    high = len(list) - 1

    while low <= high:
        mid = (low + high) // 2
        guess = list[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None

my_list = [1, 3, 5, 7, 9]

print(binary_search(my_list, 3))
print(binary_search(my_list, -1))

# Simple Search
#   - Searching by checking each element
#   - Takes n operations - run time is O(n), linear time
#   - 100 items => 100 guesses
#   - 4,000,000,000 items => 4,000,000,000 guesses

# Binary Search
#   - Searching by removing half the items each iteration
#   - Takes log n operations to check a list of size n - run time is O(log n), logarithmic time
#   - 100 items => 7 guesses
#   - 4,000,000,000 items => 32 guesses

# Big O Notation
#   - Run times of algorithms is expressed in Big O notation
#   - Measured in terms of growth of the number of operations of an algorithm - not the speed in seconds
#   - Establishes worst-case run time

# Common Big O Run Times (Fastest to Slowest)
#   - O(1) is constant time, ex: assigning a value to a variable
#   - O(log n) is log time, ex: binary search
#   - O(n) is linear time, ex: simple search
#   - O(n * log n) is linearithmic time, ex: quick sort
#   - O(n^2) is quadratic time, ex: selection sort
#   - O(n!) is factorial time, ex: solving the traveling salesman problem via brute-force search

# Traveling Salesman
#   - Problem: you have a salesman who has to go to 5 cities while traveling the minimum distance
#   - Brute Force Solution
#       - Look at every possible order to travel to the cities
#       - For 5 cities, there are 120 permutations
#       - For 6 cities, there aare 720 permutations
#       - For 7 cities, there are 5040 operations
#   - Run time
#       - For n items, it will take n! (n factorial) operations to compute the results
#       - O(n!) time