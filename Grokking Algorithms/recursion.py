# Every recursive function has two parts:
#   - Base case: function doesn't call itself and stops (avoids infinite loop)
#   - Recursive case: function calls itself

# Recursive Countdown Example
def countdown(i):
    print(i)
    if i <= 0:
        return
    else:
        countdown(i-1)

# Stack is a simple DS with 2 actions:
#   - Push => insert an item to the top
#   - Pop => read and remove an item from the top

# Recursive Factorial Example
def factorial(x):
    if x == 1:
        return 1
    else:
        return x * factorial(x-1)