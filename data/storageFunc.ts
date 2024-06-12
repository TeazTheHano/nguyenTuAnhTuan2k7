import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from './data';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const exerciseCourse = data().exerciseCourse;
const quiz = data().quiz;

const storage = new Storage({
  // maximum capacity, default 1000 key-ids
  size: 1000,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage, // for web: window.localStorage

  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: null,

  // cache data in the memory. default is true.
  enableCache: true,

  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    // Sync method for retrieving data from the server
  },
});
export default storage;

/**
 * Saves the exercise course data to storage.
 * @param exerciseCourse - The exercise course data to be saved.
 * @param category - The category of the exercise course.
 * @param index - The index of the exercise course.
 */
export const saveExerciseCourse = (
  exerciseCourse: any,
  category: Number,
  index: Number,
) => {
  storage.save({
    key: `exerciseCourse`,
    data: exerciseCourse,
    id: `${category}-${index}`,
    expires: null,
  });

  console.log(
    `${exerciseCourse.name} Exercise course ${category}-${index} saved`,
  );
};

/**
 * Retrieves the exercise course from storage based on the provided category and index.
 * @param {Number} category - The category of the exercise course.
 * @param {Number} index - The index of the exercise course.
 * @returns {Promise<any>} - A promise that resolves to the exercise course object.
 */
export const getExerciseCourse = async (
  category: Number,
  index: Number,
): Promise<any> => {
  console.log(`Getting exercise course ${category}-${index}`);
  return await storage.load({
    key: `exerciseCourse`,
    id: `${category}-${index}`,
  });
};

export const getAllExerciseCourse = async () => {
  return await storage.getAllDataForKey('exerciseCourse');
};

export const loadDefautExerciseCourse = () => {
  exerciseCourse.forEach((category, categoryIndex) => {
    console.log(`Loading category ${category.category}`);

    category.data.forEach((course, courseIndex) => {
      console.log(`Loading course ${course.name}`);

      saveExerciseCourse(course, category.category, courseIndex);
    });
  });
};

export const clearExerciseAllData = (alert?: boolean = true) => {
  storage
    .clearMapForKey('exerciseCourse')
    .then(() => {
      console.log('Exercise course data cleared');
      alert ? Alert.alert('Đã đặt lại dữ liệu bài tập') : null;
      loadDefautExerciseCourse();
    })
    .catch(err => {
      console.log(err);
    });
};

export const saveQuiz = (quiz: any, category: Number, level: Number) => {
  storage.save({
    key: `quiz`,
    data: quiz,
    id: `${category}-${level}`,
    expires: null,
  });

  console.log(`Quiz ${category}-${level} saved`);
};

export const getQuiz = async (
  category: Number,
  level: Number,
): Promise<any> => {
  console.log(`Getting quiz ${level}`);
  return await storage.load({
    key: `quiz`,
    id: `${category}-${level}`,
  });
};

export const getAllQuiz = async () => {
  return await storage.getAllDataForKey('quiz');
};

export const loadDefaultQuiz = () => {
  quiz.forEach((item, index) => {
    saveQuiz(item, item.category, item.level);
  });
};

export const clearQuizAllData = (alert: boolean = true) => {
  storage
    .clearMapForKey('quiz')
    .then(() => {
      console.log('Quiz data cleared');
      alert ? Alert.alert('Đã đặt lại dữ liệu bài kiểm tra') : null;
      loadDefaultQuiz();
    })
    .catch(err => {
      console.log(err);
    });
};

export const clearAllData = async () => {
  const clear = async () => {
    clearExerciseAllData(false);
    clearQuizAllData(false);
    await storage.remove({
      key: 'userInfo',
    });

    Alert.alert('Đã xóa dữ liệu người dùng');
  };

  clear();
};
