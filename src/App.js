import { useEffect, useState } from "react";
import ConvertMarkdown from "./components/MarkdownPreview";

import "./App.css";

function App() {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        let html = ConvertMarkdown(markdown);

        const markdownPreview = document.getElementById("markdown-preview");
        markdownPreview.innerHTML = html;
    }, [markdown]);

    return (
        <div>
            <textarea
                placeholder="Write here your markdown..."
                value={ markdown }
                onChange={ e => setMarkdown(e.target.value) }
            />
            
            <div id="markdown-preview"></div>
        </div>
    );
}

export default App;