import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs';

const addItem = (val: String) => {
    const node: Element = document.createElement('li');
    const textnode: Text = document.createTextNode(val.toString());
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
};

const subject: Subject<String> = new Subject();

subject.subscribe(
    (data: any) => addItem('Observer 1: ' + data),
    (err) => addItem(err),
    () => addItem('Observer 1 Completed')
);

subject.next('The first thing has been sent');

const subscription2: Subscription = subject.subscribe((data: String) => addItem('Observer 2: ' + data));

subject.next('The second thing has been sent');
subject.next('The third thing has been sent');

subscription2.unsubscribe();

subject.next('The final thing has been sent');
