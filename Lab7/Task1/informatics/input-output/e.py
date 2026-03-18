mkad = 109
nums = []

for i in range(2):
    num = int(input())
    nums.append(num)

km = nums[0] * nums[1]

print((mkad + km) % mkad)
