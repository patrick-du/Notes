# Hash tables are hash maps, maps, dictionaries, and associative arrays
# Hash tables are a combination of a hash function with an array
# Hash functions maps data to a value
#   - Good: distribute values evenly
#   - Bad: groups values together and produces many collisions

# Use cases
#   - Modeling relationships from one thing to another thing
#   - Filtering out duplicates
#   - Caching/memorizing data

# In Python, hash tables are dictionaries
book = dict()
book2 = {}

book["apple"] = 0.67
book["milk"] = 1.49
book["avocado"] = 1.49

print(book)
print(book["avocado"])

# Preventing duplicate entries with a hash
#   - Create a hash to keep track of voters
#   - Check voters with the get function - returns value or None

voted = {}
voted["tom"] = True

def check_voter(name):
    if voted.get(name):
        print("You cannot vote")
    else:
        voted[name] = True
        print("You have voted")

check_voter("tom")
check_voter("jerry")

# Cache with hash tables
#   - Server only has to do work if URL isn't stored in cache
cache = {}

def get_page(url):
    if cache.get(url):
        return cache[url]
    else:
        data = [1, 2, 3, 4, 5]
        cache[url] = data
        return data

# Collisions 
#   - For example, array has 26 slots and hash function assigns spots alphabetically
#   - What occurs when you have two words with the same first letter?
#       - Two keys are assigned to the same slot and the original value is overwritten
#   - Solution: if multiple keys map to the same slot, start a linked list at that slot

# Hash Table Performance
#   - Search, insert, delete operations all have average case of O(1) and worst case of O(n)

# Hash Table Implementation
#   - Load factor measures the empty slots remaining in your hash table
#       - Ex: 2 of 3 slots occupied gives you a load factor of 0.5
#   - Rule of thumb is when load factor > 0.7, resizing should occur
#       - Create a new array ~2x the size and reinsert all items into the new hash table
#   - Lower load results in less collisions and greater performance
