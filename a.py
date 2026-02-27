tree = {
    "value": 1,
    "children": [
        {"value": 2, "children": []},
        {"value": 3, "children": [
            {"value": 4, "children": []}
        ]}
    ]
}

def collect_values(node):
    values = [node["value"]]
    for child in node["children"]:
        values.extend(collect_values(child))
    return values

print(collect_values(tree))  # [1, 2, 3, 4]
