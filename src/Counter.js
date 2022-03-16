import React, { useState } from 'react';
import {
	Container,
	Row,
	Col,
	Button,
	Card,
	CardTitle,
	CardBody,
	ButtonGroup
} from 'reactstrap';

function Counter() {
	const [count, setCount] = useState(0);
	const [quantity, setQuantity] = useState(0);

	const subtractionHandler = () => {
		if (count <= 0) {
			return;
		}
		setCount(count - 1);
	};

	const additionHandler = () => {
		setCount(count + 1);
	};

	const handleOnChange = (e) => {
		setQuantity(e.target.value);
	};

	const handleSubtractQuantity = () => {
		if (quantity) {
			if (quantity > count) {
				return;
			}
		}
		setCount(count - parseInt(quantity, 10));
	};

	const handleAddQuantity = () => {
		if (quantity) setCount(count + parseInt(quantity, 10));
	};

	const handleReset = () => {
		setCount(0);
		setQuantity(0);
	};

	return (
		<Container className='p-5'>
			<Row className='align-items-center justify-content-center'>
				<Col className='col-lg-4'>
					<Card>
						<CardTitle className='m-3'>
							<h1>Let's Count!</h1>
						</CardTitle>
						<CardBody>
							<Row>
								<h1>{count}</h1>
							</Row>
							<Row></Row>
							<Row className='m-3'>
								<h4>Enter custom Amount:</h4>
							</Row>
							<Row className='mx-5 mb-3'>
								<input type='text' value={quantity} onChange={handleOnChange} />
							</Row>
							<Row>
								<ButtonGroup className='my-3'>
									<Button color='dark' outline onClick={additionHandler}>
										+ 1
									</Button>
									<Button color='dark' outline onClick={subtractionHandler}>
										- 1
									</Button>
									<Button color='dark' outline onClick={handleAddQuantity}>
										Add {quantity}
									</Button>
									<Button color='dark' outline onClick={handleSubtractQuantity}>
										Subtract {quantity}
									</Button>
								</ButtonGroup>
							</Row>

							<Button className='m-2' color='danger' onClick={handleReset}>
								Reset Counter
							</Button>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Counter;
