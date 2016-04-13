//import mongo
import { Mongo } from 'meteor/mongo';

//export constant tasks as new mongo collection
export const Tasks = new Mongo.Collection('tasks');