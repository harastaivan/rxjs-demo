import { Observable } from 'rxjs/Observable';
import { Observer, Subscription } from 'rxjs';

const addItem = (val: string) => {
    const node = document.createElement('li');
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
};

const observable: Observable<string> = Observable.create((observer: Observer<string>) => {
    try {
        observer.next('Hey guys');
        // throw new Error('Something went wrong');
        observer.next('How are you');
        setInterval(() => {
            observer.next('I am good');
        }, 2000);
    } catch (err) {
        observer.error(err);
    }
});

const subscription: Subscription = observable.subscribe(
    (x: string) => addItem(x),
    (error: Error) => addItem(`${error.name}: ${error.message}`),
    () => addItem('Completed')
);

setTimeout(() => {
    const subscription2 = observable.subscribe((x: string) => addItem('Subscriber 2: ' + x));
}, 1000);
