import React from 'react'
import './ReferPositionCardStyle.less';
import {Card} from 'antd';
const { Meta } = Card
interface ReferPositionData {
    jobTitle: string,
    localtion: string,
    graduationDate: string,
    postDate: string
}

const ReferPositionCard:React.FC<ReferPositionData> = (props: ReferPositionData) => {
    return (
        <a className='' href='/#'>

                <div className='cardWrapper'>
                    <Card style={{width: '250px', padding: '0px 0px 10px 0px'}} bodyStyle={{padding: '0'}} bordered={false} hoverable={false}>

                      <Meta title={props.jobTitle} className='primaryText'/>
                      <div className=''>
                        <p>{props.localtion} | {props.graduationDate} | {props.postDate}</p>
                      </div>
                    </Card>
                </div>

        </a>
    )
}

export default ReferPositionCard;


// 01234
// ABCDE\0   char * input =
// CDEAB\0   output
//
// a, length=5
//
// int shift = 2; shift left
//
// input, output
//
//
// int currentIndex; // loop through input array
// for(currentIndex=0; currentIndex < length; currentIndex++){
//
//   if(shift > 0){
//     int shiftedIndex = currentIndex - shift;
//
//     int newIndex  = shiftedIndex;
//     if(shiftedIndex < 0){
//         newIndex  = length + shiftedIndex;
//     }
//
//     output[newIndex] = input[currentIndex];
//   } else {
//     int shiftedIndex = currentIndex + shift;
//
//     int newIndex  = shiftedIndex % length ;
//
//     output[newIndex] = input[currentIndex];
//   }
//
//
//
// }
