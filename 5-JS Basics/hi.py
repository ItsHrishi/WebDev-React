def OverlappingRectangles(strAzz):
    def parse_coordinates(coord_str):
        return tuple(map(int, coord_str.strip('()').split(',')))

    coords = list(map(parse_coordinates, strAzz.strip('[]').split('),(')))

    # Rectangle 1 coordinates
    x1, y1 = coords[0]
    x2, y2 = coords[1]
    x3, y3 = coords[2]
    x4, y4 = coords[3]

    # Rectangle 2 coordinates
    x5, y5 = coords[4]
    x6, y6 = coords[5]
    x7, y7 = coords[6]
    x8, y8 = coords[7]

    # Check if there is any overlap
    x_overlap = max(0, min(x2, x8) - max(x1, x5))
    y_overlap = max(0, min(y2, y8) - max(y1, y5))

    if x_overlap == 0 or y_overlap == 0:
        return 0

    # Calculate the area of the overlapping region
    overlapping_area = x_overlap * y_overlap

    # Calculate the area of the first rectangle
    rect1_area = abs((x2 - x1) * (y2 - y1))

    # Calculate the number of times the overlapping region can fit into the first rectangle
    times_fit = rect1_area // overlapping_area

    return times_fit

# Test the function with the given example
print(OverlappingRectangles("(0,0),(2,2),(2,0),(0,2),(1,0),(1,2),(6,0),(6,2)"))  # Output: 2
