function incrementCounter(docRef) {
  docRef.get().then((doc) => {
    if (doc.exists) {
      const currentCount = doc.data().counter;
      docRef.update({ counter: currentCount + 1 });
    } else {
      // Handle the case where the document doesn't exist
      console.error('Document does not exist!');
    }
  }).catch((error) => {
    // Handle errors appropriately
    console.error('Error incrementing counter:', error);
  });
}