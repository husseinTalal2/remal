import { db, auth, storage } from "../../firebase";
import { firestore } from "firebase";
const randomNum = () => {
    return Math.random() * 100000;
};
const addPost = (post, imgs) => {
    imgs = Object.values(imgs);
    db.collection("posts")
        .add(post)
        .then((docRef) => {
            docRef.set({ id: docRef.id }, { merge: true });
            imgs.forEach((img) => {
                const storageRef = storage
                    .ref()
                    .child("posts/" + docRef.id + "/" + randomNum());
                storageRef.put(img);
            });
            alert("post added successfully");
        })
        .catch((err) => {
            alert(err.message);
        });
};

const addMember = async (member, img) => {
    let doc;
    db.collection("members")
        .add(member)
        .then((docRef) => {
            doc = docRef;
            console.log(doc);
            const storageRef = storage.ref("members/" + doc.id);
            const upload = storageRef.put(img);
            upload.then(function complete() {
                storageRef.getDownloadURL().then((url) => {
                    docRef.set({ img: url }, { merge: true });
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

export const firebaseFunctions = {
    addPost: addPost,
    addMember: addMember,
    getPosts: getPosts,
    getMembers: getMembers,
    getMember: getMember,
    getPost: getPost,
    signUp: (email, password) =>
        firebase.auth().createUserWithEmailAndPassword(email, password),
    signIn: (email, password) =>
        firebase.auth().signInWithEmailAndPassword(email, password),
};
