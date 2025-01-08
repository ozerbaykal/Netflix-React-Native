import {ScrollView, View} from 'react-native';
import defaultSreenStyle from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {NewListSchema} from '../../utils/validationSchemas';

const AddNewList = () => {
  //const dispatch = useDispatch();
  return (
    <View style={defaultSreenStyle.container}>
      <Formik
        validationSchema={NewListSchema}
        initialValues={{
          id: Date.now(),
          title: '',
        }}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <ScrollView>
            <Input
              error={errors.title}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              title="Watch List Name"
            />
            <Button onPress={handleSubmit} title="Save" status="primary" />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default AddNewList;
