import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';
import * as api from '../api';

export const getJobs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchJobs();
 
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createJob = (post) => async (dispatch) => {
    try {
        const { data } = await api.createJob(post);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateJob = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateJob(id, post);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteJob = (id) => async (dispatch) => {
    try {
        await api.deleteJob(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}