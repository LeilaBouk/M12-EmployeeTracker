INSERT INTO department (name)
VALUES ("Accounting"),
        ("HR"),
        ("Design"),
        ("Sales"),
        ("Editorial"),
        ("IT");

INSERT INTO roles (title, salary, dept_id)
VALUES ("Writer", 20, 1),
        ("Illustrator", 20, 2),
        ("Graphic Designer", 20, 3),
        ("Editor", 30, 4),
        ("Manager", 5, 5),
        ("Accountant", 40, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Charlotte", "Aberdeen", 1, 1),
        ("Marcos", "Cas", 2, 2),
        ("Charlemagne", "Frank", 3, NULL),
        ("Cyril", "Briggins", 4, 3),
        ("Madeline", "Laskov", 5, 4),
        ("Tristan", "Iseult", 6, 5);