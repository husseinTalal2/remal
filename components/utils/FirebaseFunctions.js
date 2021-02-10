import { db, auth, storage } from "../../firebase";
import { firestore } from "firebase";



const addPost = (post) => {
    return db
        .collection("posts")
        .doc()
        .set(post, { merge: true })
        .then(() => {
            alert("Your appointment is recorded successfully");
        })
        .catch((err) => {
            alert(err.message);
        });
};

const addMember = (member) => {
    let doc;
    db.collection("members")
        .doc()
        .set(post, { merge: true })
        .then((docRef) => {
            doc = docRef;
            alert("Your appointment is recorded successfully");
        })
        .catch((err) => {
            alert(err.message);
        });
    const storageRef = storage.ref("members/" + doc.id);
    const upload = storageRef.put(member.img);
    upload.on("state_changed", function complete() {
        console.log("uploaded");
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

export const firebasefunctions = {
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