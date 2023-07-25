# NL Design

The Product Website Template harnesses the power of the NL Design System to provide a user-centered interface that is both intuitive and accessible. The NL Design System is a comprehensive design system developed in the Netherlands, which focuses on creating digital solutions that are user-friendly, inclusive, and accessible.

One of the key strengths of the NL Design System is its commitment to user testing and validation. Every component and design pattern in the system has been tested with real users in the field. This ensures that the interface elements used in the Product Website Template are not only aesthetically pleasing but also effective in facilitating user interaction and engagement.

In addition to its user-centered approach, the NL Design System also adheres to WCAG (Web Content Accessibility Guidelines) compliance. This means that the Product Website Template is designed to be accessible to a wide range of people, including those with disabilities. By adhering to WCAG guidelines, the template ensures that your product page is inclusive and accessible to all users.

But the benefits of the NL Design System don't stop there. The system also provides a flexible framework that can be easily customized to match an organization's style. In the Product Website Template, you can style your product page using your organization's NL design token. This allows you to maintain a consistent look and feel across all your products and services, reinforcing your brand identity.

By leveraging the NL Design System, the Product Website Template provides a user-centered, accessible, and customizable solution for showcasing your open-source project.

## Challanges

While the Product Website Template offers a flexible and customizable solution for creating product pages, it's not without its challenges. One of the main challenges lies in the use of NL design tokens.

NL design tokens are essentially variables that store visual design attributes. They're used to maintain a consistent look and feel across different platforms and devices. In the context of the Product Website Template, you can use your organization's NL design tokens to style your product page.

However, not all NL design token sets have all the tokens needed to fully utilize the template. In fact, as of now, none of the existing token sets provide a complete set of tokens that cover all aspects of the template. This means that some elements of the template might not be styled as expected when using certain NL design tokens.

This challenge requires a certain level of creativity and problem-solving. You might need to create additional tokens to fill in the gaps, or find alternative ways to style certain elements of the template. It's also important to keep in mind that the NL design system is continually evolving, and more comprehensive token sets might become available in the future.

Despite these challenges, the use of NL design tokens in the Product Website Template provides a powerful way to customize your product page and align it with your organization's branding. It's a testament to the flexibility and adaptability of the template, and a key feature that sets it apart in the world of open-source projects.

## Configuration

The NL Design template can be configured (or changed) trough the workflow yaml. There's one property governing the activated theme.

```yaml
# NL-Design Theme
NL_DESIGN_THEME_CLASSNAME: "conduction-theme"
```

The Product Website Template can be configured with any and all NL Design themes. Currently, we have the following themes readily installed, by changing the `NL_DESIGN_THEME_CLASSNAME` to one of the following values, the theme will be installed. Cannot find your organization's design tokens in this list? Send us a message and we will add them.

> Note: most themes are directly installed from the [nl-design-system repository](https://github.com/nl-design-system/themes/tree/main/proprietary), is your theme incomplete? Please create a pull request.

| Organization           | NL_DESIGN_THEME_CLASSNAME |
| ---------------------- | ------------------------- |
| Conduction (default)   | `"conduction-theme"`      |
| Bodegraven             | `"bodegraven-theme"`      |
| Borne                  | `"borne-theme"`           |
| Buren                  | `"buren-theme"`           |
| Demodam                | `"demodam-theme"`         |
| Drechterland           | `"drechterland-theme"`    |
| Duiven                 | `"duiven-theme"`          |
| Enkhuizen              | `"enkhuizen-theme"`       |
| Groningen              | `"groningen-theme"`       |
| Haarlem                | `"haarlem-theme"`         |
| Haarlemmermeer         | `"haarlemmermeer-theme"`  |
| Hoorn                  | `"hoorn-theme"`           |
| Horstaandemaas         | `"horstaandemaas-theme"`  |
| Leiden                 | `"leiden-theme"`          |
| Leidschendam Voorburg  | `"leidschendam-theme"`    |
| Nijmegen               | `"nijmegen-theme"`        |
| Noordoostpolder        | `"noordoostpolder-theme"` |
| Provincie Zuid Holland | `"pzh-theme"`             |
| Rotterdam              | `"rotterdam-theme"`       |
| Stedebroec             | `"stedebroec-theme"`      |
| Tilburg                | `"tilburg-theme"`         |
| Utrecht                | `"utrecht-theme"`         |
| Venray                 | `"venray-theme"`          |
| Vught                  | `"vught-theme"`           |
| Westervoort            | `"westervoort-theme"`     |
| Zevenaar               | `"zevenaar-theme"`        |
| Zwolle                 | `"zwolle-theme"`          |
