import { ok } from "node:assert/strict";
import { test } from "node:test";
import { strict as assert } from "node:assert/strict";

let zombies = 0;
let capacity = 0;

const createRoom = (startCapacity: number, startZombies: number) => {
  capacity =+ startCapacity;
  zombies =+ startZombies
};


  
const isFull = () => {
  if (capacity <= zombies) return true;
  if (capacity === 0) return true;
    return false;
}

const addZombie = (extraZombies: number) => {
  zombies =+ extraZombies;
}


test("room is full", () => {
  createRoom(0, 0);

  const isRoomFull = isFull();

  ok(isRoomFull);
});

test("empty room that fits one zombie is not full", () => {
  createRoom(1, 0);

  const isRoomFull = isFull();

  ok(!isRoomFull);
});

test("room with no capacity cannot fit any zombies", () => {
  const room = createRoom(0, 1);

  const isRoomFull = isFull();

  ok(isRoomFull);
});

test("one-roomer becomes full when a zombie is added", () => {
  createRoom(1, 0);
  addZombie(1);

  const isRoomFull = isFull();

  ok(isRoomFull);

});

test("two-roomer is not full when a zombie is added", () => {
  createRoom(2, 0);
  addZombie(1);

  const isRoomFull = isFull();

  ok(!isRoomFull);
});

test.skip("second zombie consumes first zombie when added to a one-roomer", () => {});

// You are free to add more tests that you think are relevant!
