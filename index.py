def solve():
    n = int(input())
    heights = list(map(int, input().split()))
    
    max_height = 0
    result = []
    stealable_positions = 0
    

    
    for height in heights:
        if height > max_height:
            result.append(-1)
            stealable_positions += 1
        else:
            result.append(max_height)
        max_height = max(max_height, height)
    
    # طباعة النتائج
    print(stealable_positions)
    print(' '.join(map(str, result)))

# استخدام المثال
solve()