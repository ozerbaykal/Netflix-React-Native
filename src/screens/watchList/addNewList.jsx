import {ScrollView, View, Text} from 'react-native';
import defaultSreenStyle from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {NewListSchema} from '../../utils/validationSchemas';
import {addNewList} from '../../store/slice/watchListSlice';
import addNewListStyle from '../../styles/addNewList/addNewListStyle';

const AddNewList = () => {
  const dispatch = useDispatch();
  return (
    <View style={defaultSreenStyle.container}>
      <Formik
        validationSchema={NewListSchema}
        initialValues={{
          id: Date.now(),
          title: 'Funny',
        }}
        onSubmit={values => dispatch(addNewList(values))}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <ScrollView>
            <View style={addNewListStyle.titleContainer}>
              <Text style={addNewListStyle.title}> Ready to watch?</Text>
              <Text style={addNewListStyle.subTitle}>
                Enter your email to create or sign in to your account.
              </Text>
            </View>
            <Input
              error={errors.title}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              title="Watch List Name"
            />
            <View style={addNewListStyle.buttonContainer}>
              <Button onPress={handleSubmit} title="Create" status="primary" />
            </View>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default AddNewList;
