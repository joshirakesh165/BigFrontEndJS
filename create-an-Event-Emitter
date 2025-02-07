https://bigfrontend.dev/problem/create-an-Event-Emitter/discuss?sort=mine


// please complete the implementation
class EventEmitter {

    subscriptions = [];

    subscribe(eventName, callback) {
        let id = `${eventName}_${Math.floor(Math.random() * 1000000)}_${+new Date()}`;
        this.subscriptions.push({id,eventName,handler:callback})
        return {
            release :  () => {
                this.subscriptions = this.subscriptions.filter(cb => cb.id !== id);
            }
        }
    }
    
    emit(eventName, ...args) {
        let subs =  this.subscriptions.filter(el => el.eventName == eventName)
        subs?.forEach(el => {
            if(args.length){
                args.forEach(arg => el.handler(arg))
            } else {
                el.handler()
            }
        })
    }

  }
  
  const emitter = new EventEmitter()

  function callback1(val) {
    console.log(val)
  }
  
  const sub1  = emitter.subscribe('event1', callback1)
  const sub2 = emitter.subscribe('event1', callback1)
  // same callback could subscribe 
  // on same event multiple times
//   const sub3 = emitter.subscribe('event1', callback1)
  
  emitter.emit('event1', 1, 2);

  console.log("#########");
  sub1.release();
  emitter.emit('event1', 1, 2);
//   sub3.release()
