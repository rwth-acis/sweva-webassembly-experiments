n1 = 0
n2 = 1
count = 0
until = 10

#print(f"These are the first {until} numbers in the Fibonacci sequence:")

while count < until:
    n1, n2 = n2, n1 + n2
    count += 1
    
print(f"Result: {n1}")