function incrementCounter(docRef) {
  return docRef.update({ counter: firebase.firestore.FieldValue.increment(1) });
} 