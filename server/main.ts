import { Meteor } from 'meteor/meteor';
import { Tasks } from '../imports/api/tasks'

Meteor.startup(async () => {
  // code to run on server at startup
  if (await Tasks.find().countAsync() === 0) {
    await Tasks.insertAsync({
      text: 'Vaisselle',
      checked: false,
    });

    await Tasks.insertAsync({
      text: 'Tutoriel Meteor',
      checked: true,
    });
  }
});

Meteor.publish(null, () => {
  return Tasks.find();
})

Tasks.allow({
  insert: () => true,
  update: () => true,
  remove: () => true,
})
