# Codeforces Tag Hider 🙈

A simple but powerful Chrome Extension that hides problem tags on Codeforces to prevent spoilers while practicing.

## 🚀 Why this extension?
When practicing problems on Codeforces, seeing tags like `dp`, `greedy`, or `graphs` often gives away the solution approach before you've even read the problem. 

**Codeforces Tag Hider** solves this by:
* Automatically hiding tags when you open a problem page.
* Allowing you to toggle them **On/Off** with a single click.
* Remembering your preference (Hidden/Shown) even after you reload the page.

## ✨ Features
* **Automatic Hiding:** Tags are hidden by default when the extension is active.
* **Persistent State:** If you hide tags, they stay hidden across page reloads and browser restarts.
* **One-Click Toggle:** Easily reveal tags if you are stuck, then hide them again.
* **Clean UI:** Minimalist popup interface.

## 🛠️ Installation Guide

Since this extension is not yet on the Chrome Web Store, you can install it manually in **Developer Mode**.

### Step 1: Download the Source Code
1.  Clone this repository to your local machine:
    ```bash
    git clone [https://github.com/YOUR_USERNAME/codeforces-tag-hider.git](https://github.com/YOUR_USERNAME/codeforces-tag-hider.git)
    ```
    *(Or simply download the ZIP file and extract it).*

### Step 2: Load into Google Chrome
1.  Open Google Chrome and type this in the address bar:
    `chrome://extensions`
2.  Toggle on **Developer mode** in the top-right corner.
3.  Click the **Load unpacked** button (top-left).
4.  Select the folder where you downloaded/extracted the code.

🎉 **Done!** The extension icon should now appear in your browser toolbar.

## 📖 How to Use
1.  Go to any [Codeforces Problem Page](https://codeforces.com/problemset).
2.  The "Problem tags" box on the right sidebar will be hidden automatically.
3.  Click the extension icon in your toolbar to open the popup.
4.  Click the **"Toggle Tags"** button to show or hide the tags.

## 📂 Project Structure
* `manifest.json` - Configuration and permissions (Manifest V3).
* `content.js` - The script that runs on Codeforces to manipulate the DOM.
* `index.js` - Logic for the popup button (sends messages to content.js).
* `index.html` - The popup user interface.
* `service_worker.js` - Background event handling.

## 🤝 Contributing
Contributions are welcome! If you find a bug or want to add a feature (like hiding difficulty ratings), feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.
