import { db, auth, storage } from "../../firebase";
import { firestore } from "firebase";
import firebase from "firebase/app";
const randomNum = () => {
    return Math.random() * 100000;
};
const addPost = async (post, imgs) => {
    imgs = Object.values(imgs);
    const docRef = db.collection("posts").doc();
    docRef.set({ id: docRef.id, imgsUrls:[] }, { merge: true });
    docRef.set({...post}, {merge: true}).then(() => {
        alert("added");
    });
    imgs.forEach((img) => {
        const storageRef = storage
            .ref()
            .child("posts/" + docRef.id + "/" + randomNum());
        storageRef.put(img);
        storageRef.getDownloadURL().then(url => {
            docRef.update(
                'imgsUrls', firebase.firestore.FieldValue.arrayUnion(url)
            );
        })
    });
   
};

const addMember = async (member, img) => {
    let doc;
    db.collection("members")
        .add(member)
        .then((docRef) => {
            doc = docRef;
            const storageRef = storage.ref("members/" + doc.id);
            const upload = storageRef.put(img);
            upload.then(function complete() {
                storageRef.getDownloadURL().then((url) => {
                    docRef.set({ img: url, id: docRef.id }, { merge: true });
                });
            });
            alert("member added successfully");
        })
        .catch((err) => {
            alert(err.message);
        });
};

const getPosts = async () => {
    let posts;
    await db
        .collection("posts")
        .get()
        .then((querySnapshot) => {
            posts = querySnapshot.docs.map((doc) => doc.data());
        });

    return posts;
};

const getMembers = async () => {
    let members;
    await db
        .collection("members")
        .get()
        .then((querySnapshot) => {
            members = querySnapshot.docs.map((doc) => doc.data());
        });

    return members;
};

const getPost = async (id) => {
    let post;
    await db
        .collection("posts")
        .doc(id)
        .get()
        .then((data) => (post = data.data()));
    return post;
};

const getMember = async (id) => {
    let member;
    await db
        .collection("members")
        .doc(id)
        .get()
        .then((data) => (member = data.data()));
    return member;
};

const getPostImages = async (id) => {
    let imgs = [];
    await storage
        .ref("posts/" + id)
        .listAll()
        .then((result) => {
            result.items.forEach((imageRef) => {
                // And finally display them
                imageRef.getDownloadURL().then((url) => imgs.push(url));
            });
        })
        .catch(function (error) {
            alert(error.message);
        });

    return imgs;
};

const getGalleryImgs = async () => {
    await storage
    .ref("members")
    .listAll()
    .then((result) => {
        result.items.forEach((imageRef) => {
            // And finally display them
            imageRef.getDownloadURL().then((url) => console.log(url));
        });
    })
    .catch(function (error) {
        alert(error.message);
    });

    // /// map() array of the imageRef.getDownloadURL() promises
    //  let urlPromises = result.items.map((imageRef) =>
    //      imageRef.getDownloadURL().then(url => url)
    //  );
    
    
}

const addGalleryImgs = (imgs) => {
    imgs = Object.values(imgs);
    imgs.forEach((img) => {
        const storageRef = storage
            .ref()
            .child("gallery/" + randomNum() );
        storageRef.put(img).then(() => {
            alert("added")
        }).catch((err) => alert(err.message));

    });
}
export const firebaseFunctions = {
    addPost: addPost,
    addMember: addMember,
    getPosts: getPosts,
    getMembers: getMembers,
    getMember: getMember,
    getPost: getPost,
    getPostImages: getPostImages,
    getGalleryImgs: getGalleryImgs,
    addGalleryImgs: addGalleryImgs,
    signUp: (email, password) =>
        firebase.auth().createUserWithEmailAndPassword(email, password),
    signIn: (email, password) =>
        firebase.auth().signInWithEmailAndPassword(email, password),
};
