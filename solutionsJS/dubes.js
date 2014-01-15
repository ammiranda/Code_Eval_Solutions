function dubes(arr) {
	var placeholder = [];
	var dupes = [];
	for (var i = 0; i < arr.length; i++) {
		if (placeholder.indexOf(arr[i]) != -1) {
			dupes.push(arr[i]);
		}
		else {
			placeholder.push(arr[i]);
		}
	}
	console.log(dupes);
}

dubes([1,2,2,3]);