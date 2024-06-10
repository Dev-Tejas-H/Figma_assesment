import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, ScrollView, TouchableOpacity} from 'react-native';
import Status from './components/Status';
import ShippingStatus from './components/ShippingStatus';
import 'react-native-gesture-handler';



const prdImg = require("./assets/OIP.jpg");
const reviewImg = require("./assets/review.png");
const rightArrow = require("./assets/rightarrow.png");
const downloadInvoice = require("./assets/invoice.png");
const deliver = require("./assets/home.png");
const call = require("./assets/call.png");
const logo = require("./assets/logo.png");
const backbtn = require("./assets/backbutton.png");
const returnBtn = require("./assets/return.png");



export default function App() {
  	return (

		<ScrollView>
			<View style={styles.container}>
				<View style={styles.tasksWrapper}>
				
					<View style={styles.topHeader}>
						<View>
							<TouchableOpacity><Image source={backbtn} style={{width: 65, height: 65}} /></TouchableOpacity>
						</View>
						<View>
							<Text style={styles.sectionTitle}>Order Details</Text>
						</View>
					</View>

					<View style={styles.ordID}>
						<Text style={{fontSize: 20,fontWeight: '400'}}>Order ID : 1234DA01</Text>
					</View>
				
					{/* product details */}
					<View style={styles.cardContainer}>
						<Text style={styles.titleText}>Order Details</Text>
						<View style={styles.textContainer}>
							<Image source={prdImg} style={styles.productImage} />
							<View>
							<Text style={styles.productName}>Jacket</Text>
							<Text style={styles.productDescription}>Ellipse women's winter</Text>
							<Text style={styles.size}>Size: XL</Text>
							</View>

						</View>
					</View>

					{/** status and shipping status  */}
					<Status/>
					<ShippingStatus/>

					{/* return and need help */}
				
					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.button}>
							<Image source={returnBtn} style={{}}/>
							<Text style={styles.buttonText}>Return</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button}>
							<Image source={call} style={{width: 30, height: 30,marginTop: 5}}/>
							<Text style={styles.buttonText}>Need Help ?</Text>
						</TouchableOpacity>
					</View>

					{/** write a review */}
					<View style={styles.reviewSection}>
						<Image source={reviewImg} style={{width: 30, height: 35, marginRight: 10,marginLeft: 12}}/>
						<Text style={{fontSize: 20, fontWeight:'semi-bold',fontStyle: 'italic'}}>Write a review..</Text>
						<Image source={rightArrow} style={{width: 30, height: 40, marginLeft: 110}} />
					</View>
					<View style={styles.reviewSection}>
						<Image source={downloadInvoice} style={{width: 30, height: 32,marginRight: 10,marginLeft: 12}}/>
						<Text style={{fontSize: 20, fontWeight:'semi-bold',fontStyle: 'italic'}}>Download Invoice</Text>
						<Image source={rightArrow} style={{width: 30, height: 40, marginLeft: 85}} />
					</View>
				</View>
			
				{/**deliver to home */}
				<View style={styles.deliverySection}>
					<Image source={deliver} style={{width: 35, height: 35, marginTop:10, marginLeft: 10, marginRight: 15}} />
					<View>
						<Text style={{fontStyle: 'italic', fontSize: 20, fontWeight: 'semibold'}}>Deliver at Home</Text>
						<Text style={{color: 'grey'}} >2/5 313, Srr nagar,</Text>
						<Text style={{color: 'grey'}}>Ramayanpatti, Tirunelveli</Text>
					</View>
				</View>
				{/** customer call */}
				<View style={styles.deliverySection}>
					<Image source={call} style={{width: 35, height: 35,marginTop:5, marginLeft: 10, marginRight: 15}} />
					<Text style={{fontStyle: 'italic', fontSize:20, fontWeight: 'semibold',marginTop:5}}>Kayal vizhi, 6382860787</Text>
				</View>
				
				{/** payment details */}

				<View style={styles.paymentContainer}>
					<Text style={{fontSize: 22, fontWeight: 'bold',}} >Payment Details</Text>
					<View style={styles.paymentDetails}>
						<View>
							<Text style={{fontStyle: 'italic', color: 'grey', fontSize: 18}}>Total MRP</Text>
							<Text style={{fontStyle: 'italic', color: 'grey', fontSize: 18}}>Discount on MRP</Text>
							<Text style={{fontStyle: 'italic', color: 'grey', fontSize: 18, marginBottom: 10}}>Shipping Fee</Text>
						</View>
						<View>
							<Text style={{fontStyle: 'italic', fontWeight: 'semibold', fontSize: 18}}>  $1,999</Text>
							<Text style={{fontStyle: 'italic', fontWeight: 'semibold', fontSize: 18}}>-$1,440</Text>
							<Text style={{fontStyle: 'italic', fontWeight: 'semibold', fontSize: 18}}>  $45</Text>
						</View>
					</View>
					<View style={styles.totalPayment}>
						<Text style={{fontStyle: 'italic', fontWeight: 'medium', fontSize: 20}}>Total Amount</Text>
						<Text style={{fontStyle: 'italic', fontWeight: 'semibold', fontSize: 20,marginRight: 13}}>$579</Text>
					</View>
				
				</View>

				<View style={styles.upi}>
					<Text style={{fontSize: 18,fontWeight: 'semibold',marginLeft: 6}}>UPI: $ 579.0</Text>
				</View>

				<View style={styles.soldBy}>
					<Text style={{fontSize: 18,fontWeight: 'semibold',marginLeft: 6}}>Sold by : </Text>
					<Image source={logo} style={{width: 22, height: 22,marginTop: 4}}/>
					<Text style={{fontSize: 18,fontWeight: 'semibold',marginLeft: 6}}>Open Fashion</Text>
					<Image source={rightArrow} style={{height: 25}} />
				</View>


			</View>
			<StatusBar style="auto" />
		
		</ScrollView>
	);
}

// width:68 height:80 of image

const styles = StyleSheet.create({

  	container: {
		flex: 1,
		backgroundColor: '#E8EAED',
	},
  	tasksWrapper: {
		paddingTop: 25,
		paddingHorizontal: 0,
  	},
  	topHeader:{
		backgroundColor: '#fff',
		flexDirection: 'row',
		justifyContent: 'flex-start',
  	},
  	cardContainer: {
		backgroundColor:'#FFFFFF',
		padding: 10,
		justifyContent: 'flex-start',
		marginBottom: 10,
	},
  	textContainer: {
		flexDirection: 'row',
		fontWeight: 'bold',
  	},
  	productImage :{
		width: 68,
		height: 80,
		marginRight:20,
		marginLeft: 10,
  	},
  	titleText:{
		marginLeft: 10,
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10
  	},
  
  	productName:{
		fontSize: 18,
		fontWeight: 'bold',
		textShadowColor: 'black',
		shadowOpacity: 40

  	},
  	productDescription:{
    	fontSize: 14,
    	color: 'grey',
  	},
 	size:{
    	fontSize: 14
  	},
  	ordID : {
		backgroundColor: '#fff',
		padding: 20,
		marginTop: 10,
		marginBottom: 10,
  	},
  	sectionTitle: {
		paddingBottom: 20,
		fontSize: 24,
		fontWeight: 'bold',
		marginTop: 15,
  	},
  	items: {
    	marginTop: 30,
  	},

 	orderbox: {
		borderRadius: 10,
		flexGrow: 1,
		padding: 16,
		backgroundColor: '#fff',
  		},
 	proName: {
		fontSize: 15,
		fontWeight: 'bold',
  	},
  	proBox: {
		justifyContent: 'space-between',
		flexDirection: 'row',
  	}, 
  	buttonContainer: {
		backgroundColor: '#fff',
		justifyContent: 'center',
		padding: 20,
		paddingHorizontal: 8,
		flexDirection: 'row',
		marginTop: 5,
  	},
  	button: {
		margin: 10,
		flexDirection: 'row',
		paddingVertical: 8,
		paddingHorizontal: 10,
		borderWidth: 1.5,
		borderColor: 'grey',
		borderRadius: 5,
  	},
  	buttonText: {
		fontStyle: 'italic',
		fontSize: 16,
		fontWeight: 'semibold',
		marginTop: 5,

  	},
  	reviewSection:{
  
		justifyContent: 'flex-start',
		padding: 12,
		
		flexGrow: 1,
		backgroundColor: '#fff',
		flexDirection: 'row',
		marginBottom:10,
  	},
  	deliverySection: {
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		padding: 12,
		marginBottom: 10,
  	},
  	paymentContainer: {
		backgroundColor: '#fff',
		padding: 18,
  	},
  	paymentDetails:{
		display: 'block',
		marginTop: 5,
		flexDirection: 'row',
		justifyContent:  'space-between',
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		marginBottom: 5,
  	},
  	totalPayment:{
		flexDirection: 'row',
		justifyContent: 'space-between',
  	},
  	upi:{
		marginTop: 10,
		backgroundColor: '#fff',
		padding: 18,
  	},
  	soldBy: {
		marginTop: 10,
		backgroundColor: '#fff',
		justifyContent: 'space-around',
		padding: 18,
		flexDirection: 'row',
  	},
  

});
