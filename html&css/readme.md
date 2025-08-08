Here's a **basic introduction to HTML** with simple examples to help you get started:

---

## 🧱 What is HTML?

**HTML** (HyperText Markup Language) is the standard language used to create webpages. It provides the **structure** of a webpage using **tags**.

---

## 📄 Basic HTML Structure

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>
```

### Explanation:

| Tag               | Purpose                                 |
| ----------------- | --------------------------------------- |
| `<!DOCTYPE html>` | Declares the document is HTML5          |
| `<html>`          | The root element of the HTML page       |
| `<head>`          | Contains meta info, title, styles, etc. |
| `<title>`         | Sets the page title in the browser tab  |
| `<body>`          | Contains everything shown on the page   |
| `<h1>` to `<h6>`  | Headings (h1 is the largest)            |
| `<p>`             | Paragraph of text                       |

---

## ✨ Common HTML Tags

### Headings

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
```

### Paragraphs

```html
<p>This is a paragraph.</p>
```

### Links

```html
<a href="https://www.google.com">Go to Google</a>
```

### Images

```html
<img src="image.jpg" alt="A description of the image" />
```

### Lists

**Unordered list:**

```html
<ul>
  <li>Item One</li>
  <li>Item Two</li>
</ul>
```

**Ordered list:**

```html
<ol>
  <li>First Item</li>
  <li>Second Item</li>
</ol>
```

---

## 📦 HTML Form Example

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
  <br />
  <input type="submit" value="Submit" />
</form>
```

---

## 📚 Next Steps to Learn

* Learn about **attributes** (`href`, `src`, `alt`, etc.)
* Explore **semantic tags** like `<header>`, `<footer>`, `<nav>`, `<section>`
* Practice writing HTML pages
* Combine with **CSS** to style your page

