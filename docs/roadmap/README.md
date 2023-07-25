# Roadmap

## The Epic Saga of the Product Website Template

In the vast realm of open-source, a beacon of hope emerged from the creative minds at Conduction. This beacon, known as the Product Website Template, was a powerful tool forged to combat a common adversary faced by many open-source and Common Ground projects: Time. Or to be more specific the absence of a dedicated product page and the arduous journey to create one.

As a Minimum Viable Product (MVP), the template was a sturdy shield, protecting users from the time-consuming process of setting up a product page. It was a chameleon, adapting its appearance to match the style of any organization's NL design token.

Yet, the saga of the Product Website Template was just beginning. The Conduction team, wise and visionary, foresaw a future where the template could evolve, gaining new abilities and becoming an even more formidable ally. They envisioned a tool that could transform into a comprehensive platform for showcasing the valor and ingenuity of any open-source project.

But the path to this future was not one they could tread alone. They needed a hero. They needed **you**.

As a knight in shining armor, you have the power to shape the destiny of the Product Website Template. By contributing your skills and creativity, you can help build new features and submit a pull request, directly influencing the evolution of the template. Your code could be the key that unlocks its full potential, making it an even more powerful ally for open-source projects everywhere.

If you're not a coder, fear not, for there is another way you can join this epic quest. By sponsoring development hours, you can provide the Conduction team with the resources they need to dedicate more time to improving the template, adding new features, and providing support to users. Your sponsorship could be the catalyst that propels the Product Website Template to new heights.

The Product Website Template is not just a tool. It's a quest, a challenge, a call to arms. It's an opportunity for you to make a difference in the world of open-source. So, brave knight, are you ready to join the saga? The future of the Product Website Template awaits your contribution.

Below, you'll find a list of potential features that could be added to the template. Choose your quest, and let's embark on this epic journey together.

## Potential Features for the Product Website Template

### NL Design Template for a New Organization

**Estimated Time:** 4 days  
**Description:** This feature would provide a new NL Design template specifically tailored for a new organization. It would allow new organizations to quickly and easily set up a product page that aligns with their branding.

### News/Blog Option

**Estimated Time:** 2 days  
**Description:** This feature would add a news or blog section to the product page. It would provide a platform for sharing updates, announcements, and other news related to the product.

### Roadmap Generated Based on Repository Milestones

**Estimated Time:** 5 days  
**Description:** This feature would generate a product roadmap based on the milestones in the repository. It would provide a visual representation of the product's development plan and progress.

### More Information About the Repository in the Footer

**Estimated Time:** 2 days  
**Description:** This feature would add more information about the repository to the footer of the product page. This could include the number of stars, the languages used in the project, and other relevant details.

### More Navigation Menu Options

**Estimated Time:** 2 days  
**Description:** This feature would expand the options available in the navigation menu. This could include the addition of icons and external links.

### Single page navigation items

**Estimated Time:** 1 day
**Description:** Currently, the Product Page Website always expects the route to a directory in order to create (a) navigation item(s). The overview page will search for the `README.md` for its content, and it will generate child-pages based on all other `.md` files within the directory. However, we want to make creating single pages (without child-pages) easier.

### Option Not to Use the Jumbotron

**Estimated Time:** 1 day  
**Description:** This feature would provide an option to not use the jumbotron on the product page. This would give users more flexibility in designing their product page.

### Organization Version of the Page

**Estimated Time:** 5 days  
**Description:** This feature would create an organization version of the product page. This would allow organizations to showcase all their products in one place without building a website.

## Known Issues

### No Documentation for Local Development

**Estimated Time:** 2 days  
**Description:** Currently, there is no documentation available for setting up and running the Product Website Template for local development. This can make it difficult for developers to test changes and new features on their local machines before pushing them to the repository. Addressing this issue would involve creating comprehensive documentation that guides developers through the process of setting up a local development environment for the template.

### Build Bug Blocks the Use of dynamic NL Design Themes

**Estimated Time:** 1 day  
**Description:** There is a known bug in the build process that prevents implementing custom themes that are not installed by Conduction. This does _not_ apply to the already implemented themes that can be configured via the environment variables. Fixing this bug would involve identifying the cause of the issue in the build process and implementing a solution that allows for the successful use of dynamic themes.

### Finalize (relative) links generated from .MD files

**Estimated Time:** 2 days
**Description:** Currently, _most_ links work. However, there are instances where the Product Website Template does not know where a relative should land and they can therefore break.
