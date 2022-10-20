INSERT INTO department(name)
VALUES ("Accounting"),
        ("HR"),
        ("Design"),
        ("Sales"),
        ("Editorial"),
        ("IT");

INSERT INTO roles(title, salary, dept_id)
VALUES ("Writer", "20", 6),
        ("Illustrator", "20", 5),
        ("Graphic Designer", "20", 4),
        ("Editor", "30", 9),
        ("Manager", "5", 2),
        ("Accountant", "40", 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Charlotte", "Aberdeen", 6, 92),
        ("Marcos", "Cas", 9, 92),
        ("Charlemagne", "Frank", 2, NULL),
        ("Cyril", "Briggins", 5, 92),
        ("Madeline", "Laskov", 4, 92),
        ("Tristan", "Iseult", 3, 92);