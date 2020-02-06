import { AsyncSubject } from 'rxjs/AsyncSubject';

const addItem = (val: String) => {
    const node: Element = document.createElement('li');
    const textnode: Text = document.createTextNode(val.toString());
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
};

const subject: AsyncSubject<String> = new AsyncSubject();

subject.subscribe(
    (data: any) => addItem('Observer 1: ' + data),
    (err) => addItem(err),
    () => addItem('Observer 1 Completed')
);

let i = 1;
var int = setInterval(() => subject.next((i++).toString()), 100);

setTimeout(() => {
    subject.subscribe(
        (data: String) => addItem('Observer 2: ' + data),
        (err) => addItem(err),
        () => addItem('Observer 2 Completed')
    );
    subject.complete();
}, 500);
