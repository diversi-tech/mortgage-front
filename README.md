# 📊 Angular mortgage management project

## Overview
Welcome to the Angular mortgage management project! This project demonstrates how to integrate CanvasJS Angular Charts into your Angular application and seed your database with customer task and document type data.

## Installation



### Step 1: Install the necessary dependencies
First, 
Those who make changes to an existing branch should:
```bash
npm install @canvasjs/angular-charts@latest
```
And those who clone the project to a new folder should do 
```bash
npm i
```

### One more Step for installation

-when you pull the changes you have to install:
npm install jwt-decode

### Step 2: Update Angular Project
Next, update your Angular project to ensure all dependencies are up-to-date:

```bash
ng update
```

## Database Seeding

### Customer Tasks Data
To provide data for customer tasks, run the following SQL command to insert sample tasks into the `CustomerTasks` table:

```sql
SET IDENTITY_INSERT [CustomerTasks] ON;
INSERT INTO [CustomerTasks]
    (id, customer_id, task_description, document_type_id, document_path, status, due_date, created_at, updated_at, CustomerId, DocumentTypes)
VALUES
    (1, 101, 'Task 1 description', 1, 'path/to/document1.pdf', 0, '2024-07-01', '2024-06-01', '2024-06-02', 1, 1),
    (2, 102, 'Task 2 description', 2, 'path/to/document2.pdf', 1, '2024-07-02', '2024-06-02', '2024-06-03', 2, 2),
    (3, 103, 'Task 3 description', 3, 'path/to/document3.pdf', 0, '2024-07-03', '2024-06-03', '2024-06-04', 3, 3),
    (4, 104, 'Task 4 description', 4, 'path/to/document4.pdf', 1, '2024-07-04', '2024-06-04', '2024-06-05', 4, 4);
SET IDENTITY_INSERT [CustomerTasks] OFF;
```

### Document Types Data
Similarly, run the following SQL command to insert document types into the `DocumentTypes` table:

```sql
SET IDENTITY_INSERT [DocumentTypes] ON;
INSERT INTO [DocumentTypes] ([Id], [Transaction_Type], [Document_Name], [Required]) VALUES
    (1, 1, 'Document 1', 1),
    (2, 2, 'Document 2', 0),
    (3, 3, 'Document 3', 1),
    (4, 4, 'Document 4', 0),
    (30, 5, 'Document 30', 0);
SET IDENTITY_INSERT [DocumentTypes] OFF;
```

## Running the Application
After completing the above steps, you should have CanvasJS Angular Charts integrated into your Angular project and a seeded database ready to display customer task and document type data.

Enjoy creating amazing visualizations with CanvasJS Angular Charts! 🎨📈

---

Feel free to reach out if you have any questions or need further assistance.

Happy coding! 🚀
