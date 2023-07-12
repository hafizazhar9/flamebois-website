import React from 'react'
import ReactModal from 'react-modal'
import momentTimezone from 'moment-timezone'
import Button from './Button'
import { findRoomInfo } from '../helpers/bookingForm.js'

const BookingModal = props => {
  console.log(props.description)
  const deleteBooking = () => {
    const roomID = props.selectedBooking.roomId
    const bookingID = props.selectedBooking._id
    props.onDeleteBooking(roomID, bookingID)
    props.onCloseBooking()
  }
  return (
    <ReactModal
      isOpen={!!props.selectedBooking}
      onRequestClose={props.onCloseBooking}
      ariaHideApp={true}
      shouldFocusAfterRender={true}
      shouldReturnFocusAfterClose={true}
      contentLabel="Booking"
      appElement={document.getElementById('app')}
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Booking Details</h3>
      {!!props.selectedBooking && (
        <div className="modal__boday">
          <p className="modal__paragraph">{findRoomInfo(props.selectedBooking.roomId, props.roomData).name}{', Level '}
          {findRoomInfo(props.selectedBooking.roomId, props.roomData).floor}</p>
          <p className="modal__paragraph">{`${momentTimezone
              .tz(props.selectedBooking['bookingStart'], 'Asia/Kuala_Lumpur')
            .format('h.mma')} to ${momentTimezone
              .tz(props.selectedBooking['bookingEnd'], 'Asia/Kuala_Lumpur')
              .format('h.mma')}`}
            <p className="modal__paragraph">{`${momentTimezone.tz(props.selectedBooking['bookingStart'], 'Asia/Kuala_Lumpur').format('MMMM Do, YYYY')} to ${momentTimezone.tz(props.selectedBooking['bookingEnd'], 'Asia/Kuala_Lumpur').format('MMMM Do, YYYY')}`}
          </p>
          </p>
          <p className="modal__paragraph"><strong>Course </strong>{props.selectedBooking['businessUnit']}</p>
          <p className="modal__paragraph"><strong>Purpose </strong>{props.selectedBooking['purpose']}</p>
        </div>
      )}
      
      <Button
        onClick={deleteBooking}
        text={`Delete`}
      />
      <Button
        className="button__close button--alternative"
        onClick={props.onCloseBooking}
        text={`Close`}
      />
    </ReactModal>
  )
}
export default BookingModal