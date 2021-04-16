import React, {Fragment, useContext, useEffect} from "react";
import {Form} from "../components/Form";
import {Notes} from "../components/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Loader} from "../components/Loader";

export const Home = () => {
    // const notes = new Array(3)
    //     .fill('')
    //     .map((a, i) => ({id: i, title: `Note ${i + 1}`}))

    const {loading, notes, fetchNotes} = useContext(FirebaseContext);

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <Form/>

            <hr/>

            {loading
                ? <Loader/>
                : <Notes notes={notes}/>
            }

            <Notes notes={notes}/>

        </Fragment>
    )
}