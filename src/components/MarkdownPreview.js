import {rules} from '../rules/rules';

export default function ConvertMarkdown(markdown) {
    rules.forEach(([rule, template]) => {
        markdown = markdown.replace(rule, template)
    })

    return markdown;
}