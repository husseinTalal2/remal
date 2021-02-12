import { db, auth, storage } from "../../firebase";
import { firestore } from "firebase";

const addPost = async (post) => {
    try {
        await db.collection("posts").doc().set(post, { merge: true });
        alert("Your post added successfully");
    } catch (err) {
        alert(err.message);
    }
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
