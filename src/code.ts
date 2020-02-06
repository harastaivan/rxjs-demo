import { Observable } from 'rxjs/Observable';
import { Observer, Subject } from 'rxjs';
import { merge } from 'rxjs/Observable/merge';

const addItem = (val: String) => {
    const node: Element = document.createElement('li');
    const textnode: Text = document.createTextNode(val.toString());
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
};

const observable = Observable.create((observer: Observer<String>) => {
    observer.next('Hey guys!');
});

const observable2 = Observable.create((observer: Observer<String>) => {
    observer.next('How is it going?');
});

const newObservable = merge(observable, observable2);

newObservable.subscribe((x: String) => addItem(x));
