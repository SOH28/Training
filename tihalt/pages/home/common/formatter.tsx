import styleclasses from '../styles/page3.module.css';


export default function Formatter(props: any) {
    const { text, bold, anchor, classes, style } = props;
    let formattedText = text;
    if (bold) {
        bold.forEach((item: string) => {
            formattedText = formattedText.replace(new RegExp(item, 'g'), `<b>${item}</b>`);
        });
    }
    if (anchor) {
        anchor.forEach((item: string) => {
            formattedText = formattedText.replace(new RegExp(item, 'g'), `<a href="#" style="color: #efb025; text-decoration: none;">${item}</a>`);
        });
    }
    formattedText = formattedText.replace(/\n/g, '<br />');

    return (
        <div dangerouslySetInnerHTML={{ __html: formattedText }} className={classes || styleclasses.description} style={style} />
    )
}