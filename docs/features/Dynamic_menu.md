# The Dynamic Menu: A Flexible Tool for Organizing Your Content

The dynamic menu in the Product Website Template is a powerful feature that allows you to add folders to the main menu of your product page. This provides a flexible and intuitive way to organize and navigate your content.

When you add a folder to the main menu, the template automatically creates a submenu item for each markdown file in that folder. This means that each markdown file becomes its own page under the corresponding main menu item. It's a simple and efficient way to structure your content and make it easily accessible to visitors.

There's one exception to this rule: the `README.md` file. Instead of becoming a submenu item, the `README.md` file is used as the page for the main menu item itself. This means that when a visitor clicks on the main menu item, they're taken to a page displaying the content of the `README.md` file.

This feature also provides a neat trick for creating a menu item without a submenu. If you want a menu item to lead directly to a single page without any subpages, you can simply create a folder that contains only a `README.md` file. When a visitor clicks on this menu item, they'll be taken directly to the page displaying the content of the `README.md` file.

By leveraging the dynamic menu, you can create a user-friendly navigation system that adapts to the structure of your content.

## Configuration
Dynamic menu items can be passed to the 
````json
[
  {
    "name": "Features", 
    "location": "/docs/features"
  },
  {
    "name": "Roadmap", 
    "location": "/docs/roadmap"
  }
]
````

Keep in mind that in order to actually pass the json configuraiton trough the worflow yaml it needs to be both stringified and put to one line.
````yaml
  GITHUB_DOCS_DIRECTORY_PATHS: '[{"name": "Features", "location": "/docs/features"},{"name": "Roadmap", "location": "/docs/roadmap"}]'
````