//Unsolved
function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let truckQueue = [];
  let queue_weight = 0;
  while (truck_weights.length > 0) {
    time += 1;
    if (truckQueue.length === bridge_length) {
      queue_weight -= truckQueue.shift();
    }
    if (queue_weight + truck_weights[0] > weight) {
      truckQueue.push(0);
      continue;
    }
    let truck_Weight = truck_weights.shift();
    truckQueue.push(truck_Weight);
    queue_weight += truck_Weight;
  }

  time += bridge_length;

  return time;
}
